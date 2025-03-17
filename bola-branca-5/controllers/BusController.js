import Bus from "../models/Bus.js";

class BusController {
  static async createBus(req, res) {
    const bus = {
      numeroCarro: req.body.numeroCarro,
      marca: req.body.marca,
      carroceria: req.body.carroceria,
      placa: req.body.placa,
      descricao: req.body.descricao
    }

    try {
      await Bus.create(bus);
      res.status(200).json('Novo veículo adicionado a Empresa.');
    } catch (error) {
      console.log('Não foi possível completar a ação.', + error);
    }
  }
  static async listAllBuss(req, res) {
    const allBuss = await Bus.findAll();

    //const busObj = allBuss.map(item => item.get());
    const busObj = JSON.parse(JSON.stringify(allBuss));

    res.status(302).json(busObj);
  }

  static async getBus(req, res) {
    const busNumero = req.params.numero;

    const bus = await Bus.findOne({
      where: {
        numeroCarro: busNumero,
      },
    })

    res.status(200).json(bus);
  }
  static async updateBus(req, res) {

    const busNumero = req.params.numero;

    await Bus.update(req.body, {
      where: {
        numeroCarro: busNumero
      }
    })

    res.status(200).json('Dados do Ônibus atualizado');
  }
  static async deleteBus(req, res) {

    const busNumero = req.params.numero;

    await Bus.destroy({
      where: {
        numeroCarro: busNumero
      }
    })

    res.status(200).json('Ônibus deletado com sucesso da tabela de veículos da empresa');
  }
}
export default BusController;
