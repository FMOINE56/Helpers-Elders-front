import './styles.scss';
import PropTypes from 'prop-types';
import { Pagination } from '@mui/material';
import Announcement from './Announcement';

export default function AnnouncementList({
  posts,
}) {
  return (
    <div className="list_posts">
      <p className="list_posts_result">4 résultats sur 357</p>
      <div className="posts">
        {posts.map((post) => <Announcement key={post.id} {...post} />)}
      </div>
      <div className="pagination">
        <Pagination count={10} variant="outlined" />
      </div>
    </div>
  );
}

AnnouncementList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired, // à modifier lorsqu'on saura comment récupérer l'avatar
    title: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date),
    ]).isRequired,
  })).isRequired,
};