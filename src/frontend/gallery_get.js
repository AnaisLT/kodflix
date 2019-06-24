import Daredevil from './images/Daredevil.jpg';
import Gotham from './images/Gotham.jpg';
import StarTrek from './images/StarTrek.jpg';
import Supergirl from './images/Supergirl.jpg';
import Vikings from './images/Vikings.jpg';
import Westworld from './images/Westworld.jpg';
import JessicaJones from './images/JessicaJones.png';
import GoodOmens from './images/GoodOmens.jpeg';

export default function getGallery() {
    return [
      { id: 'daredevil', name: 'Daredevil', cover: Daredevil, synopsis: 'Blinded as a boy but gifted with heightened senses, Matt Murdock fights injustice by day as lawyer and by night as Daredevil in Hell\'s Kitchen, New York City.'},
      { id: 'gotham', name: 'Gotham', cover: Gotham, synopsis: 'Rookie cop James Gordon takes on Gotham City crime and corruption to avenge the murder of Bruce Wayne\'s parents.'},
      { id: 'star-trek-discovery', name: 'Star Trek Discovery', cover: StarTrek, synopsis: 'After a century of silence, war erupts between the Federation and Klingon Empire, with a disgraced Starfleet officer at the center of the conflict.'},
      { id: 'supergirl', name: 'Supergirl', cover: Supergirl, synopsis: 'Journalist-by-day Kara Danvers leads a double life as Supergirl. With the help of her loyal friends and her foster sister, Alex, she uses her superpowers to protect National City against human and alien threats alike...'},
      { id: 'vikings', name: 'Vikings', cover: Vikings, synopsis: 'Vikings follows the adventures of historical hero Ragnar Lothbrok and his family. Determined to become King and honour the Gods, he will stop at nothing to conquer new lands.' },
      { id: 'westworld', name: 'Westworld', cover: Westworld, synopsis: 'In a Wild West fantasy park staffed by artificial hosts, guests find themselves confronted to a dangerous world of infinite possibilities...' },
      { id: 'jessica-jones', name: 'Jessica Jones', cover: JessicaJones, synopsis: 'Haunted by a traumatic past, she\'s also a gifted PI with super abilities... and quite a temperament.' },
      { id: 'good-omens', name: 'Good Omens', cover: GoodOmens, synopsis:'The End of the World is coming, which means a fussy Angel and a loose-living Demon who\'ve become overly fond of life on Earth are forced to form an unlikely alliance to stop Armageddon.'},
    ];
  }