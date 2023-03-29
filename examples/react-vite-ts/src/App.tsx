import { RevertConnect } from '@revertdotdev/revert-react';

function App() {
    return (
        <div
            style={{
                margin: '2rem',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <RevertConnect
                config={{
                    revertToken: 'test',
                    tenantId: 'testTenantId',
                }}
            />
        </div>
    );
}

export default App;
