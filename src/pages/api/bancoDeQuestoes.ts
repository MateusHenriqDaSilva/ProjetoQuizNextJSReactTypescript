import RespostaModel from '../../../model/respostaModel'
import QuestaoModel from './../../../model/questao'

const questoes: QuestaoModel[] = [
    new QuestaoModel(1, 'Qual bicho transmite a doença de chagas?', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro'),
        // new RespostaModel('Abelha', false),
        // new RespostaModel('Barata', false),
        // new RespostaModel('Pulga', false),
        // new RespostaModel('Barbeiro', true),
    ]),
    new QuestaoModel(2, 'Qual fruto é conhecido no norte ou no nordeste como "Jerimum"?', [
        RespostaModel.errada('Caju'),
        RespostaModel.errada('Coco'),
        RespostaModel.errada('Chuchu'),
        RespostaModel.certa('Abobora'),
    ]),
    new QuestaoModel(3, 'Qual o coletivo de câes?', [
        RespostaModel.errada('Manada'),
        RespostaModel.errada('Alcateia'),
        RespostaModel.errada('Rebanho'),
        RespostaModel.certa('Matilha'),
    ]),
    new QuestaoModel(4, 'Qual é o triangulo que tem todos os lados diferentes?', [
        RespostaModel.errada('Equilatero'),
        RespostaModel.errada('Isoceles'),
        RespostaModel.errada('Trapezio'),
        RespostaModel.certa('Escaleno'),
    ]),
]

export default questoes