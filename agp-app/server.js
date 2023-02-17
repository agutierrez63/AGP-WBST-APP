require("dotenv").config()

const express = require("express")
const app = express()
const cors = require('cors')
app.request(express.json())
app.use(
    cors({
        origin:"http://localhost:5500",
    })
)

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([
    [ 1, { priceInCents: 10000, name: "Item_1" }],
    [ 2, { priceInCents: 20000, name: "Item_2" }]
])

app.post('/create-checkout-session', async (req, res) => {
    try {
        const session = await stripe.checkouot.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: req.body.items.map(item => {
                const storeItem = storeItems.get(item.id)
                return {
                    price_dat: {
                        currentcy: "usd",
                        product_dat: {
                            name: storeItem.name
                        },
                        unit_amount: storeItem.priceInCents
                    },
                    quantity: item.qunatity
                }
            }),
            success_url: `${process.env.CLIENT_URL}/success.html`,
            failure_url: `${process.env.CLIENT_URL}/cancel.html`
        })
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
    res.json({ url: 'Checkout=?'})
})

app.listen(3000)