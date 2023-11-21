
const RequestController = {
    index: (req, res) => {
        try {
            return res.send("Hello World")
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = RequestController