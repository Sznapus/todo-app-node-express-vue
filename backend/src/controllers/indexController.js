class IndexController {
  async invoke(req, res) {
    return res.send("response from indexControlled.invoke()");
  }
}

module.exports = IndexContrroller;
