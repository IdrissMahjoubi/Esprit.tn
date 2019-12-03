import React, { Component } from 'react';
import Icofont from 'react-icofont';
import OwlCarousel from 'react-owl-carousel3';
import PropTypes from 'prop-types';

class Testimonials extends Component {
  render() {
    //Testimonials loop start
    const testimonialsitem = this.props.testimonialsData.map((testimonials, index) => (
      <div className="single-testimonial-item text-center" key={index}>
        <Icofont icon="icofont-quote-left" />
        <p>{testimonials.Content}</p>

        <div className="client-profile">
          <img src={testimonials.clientImage} alt="client-one" />
        </div>

        <div className="client-info">
          <h3>{testimonials.Name}</h3>
          <span>{testimonials.Profession}</span>
        </div>
      </div>
    ));
    //Testimonials loop END
    return (
      <React.Fragment>
        <section className="testimonials ptb-100">
          <div className="container">
            <OwlCarousel
              className="owl-theme testimonial-slides"
              items={1}
              nav={true}
              dots={false}
              autoplay={false}
              loop={true}
              autoplayHoverPause={true}
              smartSpeed={1000}
              navText={[
                "<i class='icofont-arrow-left'></i>",
                "<i class='icofont-arrow-right'></i>"
              ]}
            >
              {testimonialsitem}
            </OwlCarousel>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

//Props Types
Testimonials.propTypes = {
  testimonialsData: PropTypes.array
};

//Default Props
Testimonials.defaultProps = {
  testimonialsData: [
    {
      clientImage: require('../assets/img/youssef-el-hachaichi.jpg'),
      Content:
        'C’est une expérience très enrichissante et une chance, que de pouvoir allier les compétences d’ingénierie acquises à Esprit et celles de management de TEM. Les opportunités professionnelles sont bien présentes et nombreuses, beaucoup de journées portes-ouvertes donnent l’occasion de se présenter à de grandes entreprises ou bien des start-up pour des stages de courte ou longue durée. Et on peut remarquer que la qualité d’Ingénieur-Manager reste très appréciée que ce soit pour les entretiens professionnels ou encore les travaux en groupe. D’autre part, le campus de 6 hectares contenant à la fois une école de commerce et d’ingénierie, en plus d’un incubateur international est une aubaine et représente une mine d’information non négligeable pour tout étudiant. Le côté associatif reste très important et permet de s’intégrer facilement mais aussi de profiter d’une ambiance bon-enfant à l’américaine au sein même du campus.',
      Name: 'Youssef EL HACHAICHI',
      Profession: '2ème année PGE à TEM'
    },
    {
      clientImage: require('../assets/img/khalil-hassine.jpg'),
      Content:
        'Mobilité sans double diplôme à l’Ecole des Mines de Douai, On a été bien accueillis à l’école dès le mois de septembre et toutes les démarches administratives nous ont été expliquées . Globalement ça me plait d’être ici à Douai, les études sont très enrichissantes. Je ne fais pas que du génie Civil, il y a plein de matières qui gravitent autour de mon domaine : management et finance, responsabilité sociétale et autres travaux de groupe sous formes de projets. Mises à part les études, je pense que cette expérience m’a été très bénéfique sur le plan personnel et humain surtout quand on interagit avec au minimum une demi-douzaine de nationalités quotidiennement.',
      Name: 'Khalil Hassine',
      Profession: 'école des Mines de Douai'
    },
    {
      clientImage: require('../assets/img/Junior-Bannem-Anatol-Clément.jpg'),
      Content:
        'Etudiant depuis 4 ans, Esprit est pour moi ce qui se fait de mieux en matière d’intégration. J’ai plusieurs fois participé à des activités culturelles organisées par celle-ci afin de mettre en avant le mariage de différentes cultures ce qui maintient une ambiance chaleureuse. Esprit est une école d’ingénieur de renommée internationale, offrant une formation de qualité, rigoureuse et surtout diversifiée. En particulier l’option SIGMA permet d’acquérir à la fin du cursus une double compétence à savoir celles d’Ingénieur-manager et telle est la raison pour laquelle je l’ai choisie.',
      Name: 'Junior Bannem Anatol Clément',
      Profession: 'Cameroun'
    },
    {
        clientImage: require('../assets/img/Loubayi-Abel.jpg'),
        Content:
          'Une expérience très enrichissante, cette école m\'a permis d\'ouvrir mon esprit à de nouvelles perspectives. La formation y est convenable. Ce que j\'apprécie le plus, c\'est ce soucis de ne pas juste former techniquement des ingénieurs mais aussi managers avec une touche d\'entrepreneuriat, l\'initiation aux outils de gestion d\'entreprise et en inculquant l\'esprit d\'innovation dans les programmes. La vie extrascolaire y est très présente au travers les différents clubs, cela permet de tisser des liens autour d\'intérêts communs, de se découvrir, d\'apprendre toujours un peu plus avec les autres et aussi se créer des opportunités.',
        Name: 'LOUBAYI Abel',
        Profession: 'Congo-Brazzaville'
      }
  ]
};

export default Testimonials;
