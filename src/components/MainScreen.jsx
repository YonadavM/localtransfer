export default function MainScreen() {
    const OpeningText = "1. Connect the other device/s to the same network as the server.\n2. Go to http://<Server Ip>:3000\n3. Start Transfer"
        // this text will modified later...
    return (
        <div className="main-container">
            <pre>
                <h1>
                    {OpeningText}
                </h1>
            </pre>
        </div>
    )
}