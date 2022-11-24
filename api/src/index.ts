import { app } from "./app"
import { sequelize } from "./db/config/db-connection"

const PORT = process.env.PORT || 3001
app.listen(PORT, async () => {
    try {
        await sequelize.sync({ force: true })
        console.log("litening at port ", PORT)
    } catch (error) {
        console.log(error)
    }
})