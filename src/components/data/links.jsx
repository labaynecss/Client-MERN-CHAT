import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import SettingsIcon from '@mui/icons-material/Settings';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PeopleIcon from '@mui/icons-material/People';

export const data = [
  {
    icon: <MarkEmailUnreadIcon className="text-white text-lg" />,

    path: '*',
  },
  {
    icon: <BookmarkIcon className="text-white text-lg" />,

    path: '/',
  },
  {
    icon: <PeopleIcon className="text-white text-lg" />,

    path: '*',
  },
  {
    icon: <SettingsIcon className="text-white text-lg" />,

    path: '*',
  },
];
