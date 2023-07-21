import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next';
import { useConnect } from 'wagmi'
import SModal from '../SModal/SModal';

export function WalletButton() {
    const { t } = useTranslation('profiles', { keyPrefix: 'wallet' });
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

            {error && <SModal title={t('title')} body={t('body')} />}
        </div>
    )
}
