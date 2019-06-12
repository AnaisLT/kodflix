import Daredevil from './images/Daredevil.jpg';
import Gotham from './images/Gotham.jpg';
import StarTrek from './images/StarTrek.jpg';
import Supergirl from './images/Supergirl.jpg';
import Vikings from './images/Vikings.jpg';
import Westworld from './images/Westworld.jpg';

export default function getGallery() {
    return [
      { id: 'daredevil', name: 'Daredevil', cover: Daredevil },
      { id: 'gotham', name: 'Gotham', cover: Gotham },
      { id: 'star Trek', name: 'Star Trek Discovery', cover: StarTrek },
      { id: 'supergirl', name: 'Supergirl', cover: Supergirl },
      { id: 'vikings', name: 'Vikings', cover: Vikings },
      { id: 'westworld', name: 'Westworld', cover: Westworld }
    ];
  }