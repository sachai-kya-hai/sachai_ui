import { Button } from '@mui/material'
import { useConnect } from 'wagmi'

export function WalletButton() {
    const { connect, connectors, error, isLoading, pendingConnector } =
        useConnect()

    return (
        <div>
            {connectors.map((connector) => (
                <Button
                    color='warning'
                    disabled={!connector.ready}
                    key={connector.id}
                    onClick={() => connect({ connector })}
                >
                    {connector.name}
                    {!connector.ready && ' (unsupported)'}
                    {isLoading &&
                        connector.id === pendingConnector?.id &&
                        ' (connecting)'}
                </Button>
            ))}

            {error && <div>{error.message}</div>}
        </div>
    )
}
