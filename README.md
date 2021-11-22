Build documentations
===
*This project follows the DEV.to [#ActionsHackathon21](https://dev.to/devteam/join-us-for-the-2021-github-actions-hackathon-on-dev-4hn4) hackathon.*

Use GitHub Actions and Workflows to build and deploy upgradable smartcontracts into the ethereum blockchains. After its deployment, the contract's ABI will be released, and the artifacts will be saved into a deployed branch.

![Screenshot](https://github.com/ActionsHackathon21/deploy-upgradable-smartcontract-to-blockchain/raw/main/docs/testnet.png)

![Screenshot](https://github.com/ActionsHackathon21/deploy-upgradable-smartcontract-to-blockchain/raw/main/docs/mainnet.png)

Check the complete workflow here:
- Deploy contracts to testnet on each push on development branches ([migrate-to-testnet.yml](.github/workflows/migrate-to-testnet.yml))
- Deploy contracts to mainnet on each push on tag ([migrate-to-mainnet.yml](.github/workflows/migrate-to-mainnet.yml))


![Screenshot](https://github.com/ActionsHackathon21/deploy-upgradable-smartcontract-to-blockchain/raw/main/docs/deployed.png)

## Actions used
- **[actions/checkout@v2](https://github.com/actions/checkout)** To checkout the source code from the repository
- **[actions/cache@v2](https://github.com/actions/cache)** To cache the dependencies, allow us to re use them for future builds
- **[marvinpinto/action-automatic-releases@latest](https://github.com/marvinpinto/action-automatic-releases)** To release your build to Github Release page


![Screenshot](https://github.com/ActionsHackathon21/deploy-upgradable-smartcontract-to-blockchain/raw/main/docs/release.png)

## Configurations
- You can config the branch postfix which holds the development's artifacts with the `DEPLOY_BRANCH_POSTFIX` variable. 
- You can also configure the development branches which you want to deploy to testnet, with `branches` key.
- To config the blockchain you want to deploy to, use the `WALLET_SECRET` , `RPC`, `NETWORK_ID` and `CONFIRMATIONS` variables
**Important!** You should store the wallet secret in GitHub's secret (**Settings** > **Secrets**). On this project, I stored as `DEV_WALLET_SECRET` and `PROD_WALLET_SECRET` secrets

![Config](https://github.com/ActionsHackathon21/deploy-upgradable-smartcontract-to-blockchain/raw/main/docs/screenshot3.png)


## Flows
- Use **[actions/checkout@v2](https://github.com/actions/checkout)** to checkout source code from the repository
- Use **[actions/setup-node@v2](https://github.com/actions/setup-node)** to setup nodejs
- Use **[actions/cache@v2](https://github.com/actions/cache)** to cache dependencies
- Install build dependencies (`yarn`, `node-gyp`, `node-gyp-build`)
- Install dependencies from `yarn.lock`
- Synchronize previous built artifacts from the deployment branch
- Build and Migrate smartcontracts
- Push new built artifacts into the deployment branch
- Release smartcontracts' JSON (including ABI)
