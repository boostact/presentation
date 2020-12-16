import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const style = {
  banner: {
    display: 'flex',
    top: '5rem',
    margin: '10px',
    justifyContent: 'center',
    position: 'relative',
  },
  bannerText: {
    position: 'absolute',
    fontSize: '120px',
    fontWeight: 'bold',
  },
  bannerTextRotated: {
    top: '60%',
    left: '10%',
    transform: 'rotate(270deg)',
    color: 'white',
  },
  bannerTextRotated_2: {
    left: '11%',
    top: '45%',
  },
  bannerTextRotated_3: {
    left: '12%',
    top: '30%',
  },
  bannerTextRotated_4: {
    top: '15%',
  },

  bannerTitle: {
    top: '50%',
    left: '60%',
    color: '#61dafb',
    fontSize: '140px',
  },
  bannerImage: {
    width: '90%',
    height: '30rem',
    zIndex: -1,
    border: '15px solid #61dafb',
    opacity: '90%',
  },
  members: {
    position: 'absolute',
    right: '5%',
    bottom: '10%',
    display: 'flex',
    color: 'white',
    flexDirection: 'column',
  },
  freeD: {
    fontSize: '50px',
    fontWeight: 'bold',
  },
  member: {
    fontSize: '30px',
  },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
