import React, { useState } from 'react';
import './styles/App.css';

import Container from './widgets/Container';
import DataRow from './widgets/DataRow';
import TechsGrid from './widgets/TechsGrid';
import TitleRow from './widgets/TitleRow';
import ReposGrid from './widgets/ReposGrid';
import ProfilePic from './assets/profile.png';
import OlimpiadasPic from './assets/olimpiadas.png';
import EsportesPic from './assets/esportes.jpg';

import { AiFillGithub } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { TbWorld } from 'react-icons/tb';
import GitHubRepoModel from './models/GitHubRepoModel';

function App() {
  const [response, setResponse] = useState<{ bio: string }>();
  const [repos, setRepos] = useState<GitHubRepoModel[]>([]);

  fetch("https://api.github.com/users/RafaelSetton").then(res => res.json()).then(value => setResponse(value));
  fetch("https://api.github.com/users/RafaelSetton/repos").then(res => res.json()).then(value => setRepos(value));

  return (
    <div className="App">
      <div id='side-bar' className='wrapper'>
        <Container id="cover-card">
          <img src={ProfilePic} alt="Profile pic" />
          <h1>Rafael Setton</h1>
          <h3>{response?.bio}</h3>
        </Container>
        <Container id="contacts">
          <DataRow icon={TbWorld} text="www.somandosaber.com.br" href="http://www.somandosaber.com.br" />
          <DataRow icon={GoLocation} text="Porto Velho - RO" />
          <DataRow icon={AiFillGithub} text="RafaelSetton" href="https://github.com/RafaelSetton" />
        </Container>
        <Container id="techs">
          <h1>Tecnologias</h1>
          <TechsGrid />
        </Container>
      </div>
      <div id='content' className='wrapper'>
        <TitleRow title="Meus Projetos">
          <a href='https://github.com/RafaelSetton?tab=repositories'>
            Ver todos
          </a>
        </TitleRow>
        <ReposGrid repos={repos} />
        <TitleRow title="Biografia" />
        <Container id='bio'>
          <img src={ProfilePic} alt="Profile pic" />
          <p>
            Meu chamo Rafael Setton Alencar de Carvalho. Nasci em Porto Velho - RO, tenho 17 anos e sou programador desde 2019.
            Gosto de matem??tica e ci??ncias desde crian??a e aos 14 anos comecei meu primeiro curso de programa????o na Udemy.
            Comecei com Python: me parecia divertido e simples, mas logo expandi meus conhecimentos para v??rias ??reas. Hoje j?? aprendi
            outras 7 linguagens: HTML, CSS, C, C++, Dart, JavaScript, Java, e seis frameworks: Flutter, React Native, ReactJS, NodeJS, Flask e Django.
          </p>
          <img src={OlimpiadasPic} alt="Profile pic" height={200} />
          <p>
            Em 2016, participei na minha primeira competi????o a n??vel nacional, a OBM (Olimp??ada Brasileira de Matem??tica), e avancei para a segunda fase da competi????o.
            No ano seguinte, participei em tr??s competi????es nacionais: Canguru, OBMEP e OBM, e obtive Men????o Honrosa na OBM, e Medalha de Ouro nas outras duas.
            Nos anos seguintes participei e fui premiado em diversas olimp??adas do conhecimento, como por exemplo 6 medalhas de ouro consecutivas no Canguru,
            uma medalha de ouro e duas de bronze na OBI, 2 ouros, 1 prata e 1 bronze em Olimp??adas Internacionais Tailandesas, e ouro na MOBFOG, na OBA e na ONC,
            al??m de ser convidado para participar das seletivas brasileiras da IOAA (Olimp??ada Internacional de Astronomia e Astrof??sica) e da IOI
            (Olimp??ada Internacional de Inform??tica). Em 2022, pela primeira vez, tive a oportunidade de participar da Mostra InterBrasil, na qual fui classificado
            para a fase nacional.
          </p>
          <img src={EsportesPic} alt="Esportes pic" height={125} />
          <p>
            Al??m do interesse pelas ci??ncias exatas, tamb??m sempre gostei de esportes. Ao longo dos anos j?? pratiquei futebol, vol??i, t??nis, t??nis de mesa, nata????o e xadrez,
            para cuidar da minha sa??de e como uma forma de lazer. Tamb??m treinei Taekwondo at?? a pen??ltima faixa. Hoje em dia as principais atividades esportivas que pratico
            s??o muscula????o, futsal e bicicleta.
          </p>
          
          <p>
            Em 2020, quando completei 16 anos, idade m??nima para um doador de sangue no Brasil, eu disse aos meus pais que queria ser doador de sangue, ent??o eles me levaram ao
            hemocentro pela primeira vez. Desde ent??o, doo sangue regularmente a cada 3 meses. Al??m disso, desde 2019, venho desenvolvendo uma plataforma online
            para as crian??as aprenderem matem??tica. ?? www.somandosaber.com.br e ?? gratuito. Fico extremamente feliz por poder ajudar os outros com algo que tenho e com o meu
            conhecimento.
          </p>
        </Container>
      </div>


    </div>
  );
}

export default App;
