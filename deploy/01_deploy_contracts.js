module.exports = async ({
    getNamedAccounts,
    deployments,
    getChainId
}) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = await getChainId()
    const tokenFarm = await deploy("TokenFarm", {
        from: deployer,
        log: true
    })
}
