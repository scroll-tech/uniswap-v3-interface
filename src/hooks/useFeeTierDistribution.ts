import * as Sentry from '@sentry/react'
import { Currency, Token } from '@uniswap/sdk-core'
import { FeeAmount } from '@uniswap/v3-sdk'
// import useBlockNumber from 'lib/hooks/useBlockNumber'
// import ms from 'ms.macro'
import { useMemo } from 'react'

// GraphQL usage commented out - using direct pool information instead
// import useFeeTierDistributionQuery from '../graphql/thegraph/FeeTierDistributionQuery'
import { PoolState, usePool } from './usePools'

// maximum number of blocks past which we consider the data stale
const MAX_DATA_BLOCK_AGE = 20

interface FeeTierDistribution {
  isLoading: boolean
  isError: boolean
  largestUsageFeeTier?: FeeAmount | undefined

  // distributions as percentages of overall liquidity
  distributions?: Record<FeeAmount, number | undefined>
}

export function useFeeTierDistribution(
  currencyA: Currency | undefined,
  currencyB: Currency | undefined
): FeeTierDistribution {
  // GraphQL usage commented out - returning default values
  // const { isLoading, error, distributions } = usePoolTVL(currencyA?.wrapped, currencyB?.wrapped)
  const isLoading = false
  const error = null
  const distributions = undefined

  // fetch all pool states to determine pool state
  const [poolStateVeryLow] = usePool(currencyA, currencyB, FeeAmount.LOWEST)
  const [poolStateLow] = usePool(currencyA, currencyB, FeeAmount.LOW)
  const [poolStateMedium] = usePool(currencyA, currencyB, FeeAmount.MEDIUM)
  const [poolStateHigh] = usePool(currencyA, currencyB, FeeAmount.HIGH)

  return useMemo(() => {
    if (isLoading || error || !distributions) {
      return {
        isLoading,
        isError: !!error,
        distributions,
      }
    }

    const largestUsageFeeTier = Object.keys(distributions)
      .map((d) => Number(d))
      .filter((d: FeeAmount) => distributions[d] !== 0 && distributions[d] !== undefined)
      .reduce((a: FeeAmount, b: FeeAmount) => ((distributions[a] ?? 0) > (distributions[b] ?? 0) ? a : b), -1)

    const percentages =
      !isLoading &&
      !error &&
      distributions &&
      poolStateVeryLow !== PoolState.LOADING &&
      poolStateLow !== PoolState.LOADING &&
      poolStateMedium !== PoolState.LOADING &&
      poolStateHigh !== PoolState.LOADING
        ? {
            [FeeAmount.LOWEST]:
              poolStateVeryLow === PoolState.EXISTS ? (distributions[FeeAmount.LOWEST] ?? 0) * 100 : undefined,
            [FeeAmount.LOW]: poolStateLow === PoolState.EXISTS ? (distributions[FeeAmount.LOW] ?? 0) * 100 : undefined,
            [FeeAmount.MEDIUM]:
              poolStateMedium === PoolState.EXISTS ? (distributions[FeeAmount.MEDIUM] ?? 0) * 100 : undefined,
            [FeeAmount.HIGH]:
              poolStateHigh === PoolState.EXISTS ? (distributions[FeeAmount.HIGH] ?? 0) * 100 : undefined,
          }
        : undefined

    return {
      isLoading,
      isError: !!error,
      distributions: percentages,
      largestUsageFeeTier: largestUsageFeeTier === -1 ? undefined : largestUsageFeeTier,
    }
  }, [isLoading, error, distributions, poolStateVeryLow, poolStateLow, poolStateMedium, poolStateHigh])
}

// GraphQL usage commented out - returning default values
function usePoolTVL(token0: Token | undefined, token1: Token | undefined) {
  // const latestBlock = useBlockNumber()
  // const { isLoading, error, data } = useFeeTierDistributionQuery(token0?.address, token1?.address, ms`30s`)
  // const { asToken0, asToken1, _meta } = data ?? {}

  return useMemo(() => {
    // GraphQL query commented out - returning empty distributions
    return {
      isLoading: false,
      error: null,
      distributions: undefined,
    }
  }, [])
}
