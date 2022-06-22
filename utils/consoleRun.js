/*
const PowerShell = require("node-powershell")

const PowershellInstance = async (command) => {
    const ps = new PowerShell({
        debug: true,
        executableOptions: {
            '-ExecutionPolicy': 'Bypass',
            '-NoProfile': true,
        },
    })

    try {
        const rawCommand = PowerShell.command`${command}`
        const result = await ps.invoke(rawCommand)

        message.channel.send(result)
    } catch (err) {
        console.error(err)
        message.channel.send(err)
    } finally {
        await ps.dispose()
    }
}

export default PowershellInstance
*/