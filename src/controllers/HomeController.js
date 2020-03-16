import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Dayanne ',
      sobrenome: 'Alcantara',
      email: 'dayanne@gmail.com',
      idade: 30,
      peso: 69,
      altura: 1.55,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
