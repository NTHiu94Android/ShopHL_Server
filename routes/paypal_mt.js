var express = require('express');
var router = express.Router();
const paypal = require('paypal-rest-sdk');


router.get('/', (req, res) => res.render('index'));

router.post('/pay', async function (req, res, next) {
    try {
        const create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://localhost:3000/paypal/success",
                "cancel_url": "http://localhost:3000/paypal/cancel"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "Iphone 4S",
                        "sku": "001",
                        "price": "25.00",
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": "25.00"
                },
                "description": "Iphone 4S cũ giá siêu rẻ"
            }]
        };

        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                throw error;
            } else {
                for (let i = 0; i < payment.links.length; i++) {
                    if (payment.links[i].rel === 'approval_url') {
                        console.log("link payment >>>>>>>>>>>: ",payment.links[i].href);
                        //res.redirect(payment.links[i].href);
                        return res.json({ error: false, responeTime: new Date(), statusCode: 200, message: "success", data: payment.links[i].href });
                        
                    }
                }

            }
        });
    } catch (error) {
        res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
    }
});

router.get('/success', (req, res) => {

    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;

    const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": "25.00"
            }
        }]
    };
    paypal.payment.execute(paymentId, execute_payment_json, function(error, payment) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            console.log(JSON.stringify(payment));
            res.send('Success (Mua hàng thành công)');
            //res.json({ error: false, responeTime: new Date(), statusCode: 200, message: "success", data: payment });
        }
    });
});

router.get('/cancel',(req,res) => {
    res.send('Cancelled (Hủy giao dịch)');
    //res.json({ error: false, responeTime: new Date(), statusCode: 200, message: "success", data: "Cancelled (Hủy giao dịch)" });
});

module.exports = router;
