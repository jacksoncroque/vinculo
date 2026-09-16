import { useState } from 'react';

import { useGlobalContext } from '../../contexts/GlobalContext';
import { useFeedContext } from '../../contexts/FeedContext';
import getNameInitials from '../../utils/getNameInitials';

import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import Input from '../Input/Input';

import styles from './CommentForm.module.scss';

const CommentForm = ({ postId }) => {
   const [input, setInput] = useState('');
   const { state, createNewComment } = useFeedContext();
   const { state: globalState } = useGlobalContext();

   const data = state.postsList;

   const handleChangeInput = (e) => {
      setInput(e.target.value);
   };

   const createComment = () => {
      createNewComment(postId, input);

      setInput('');
   };

   return (
      <div className={styles.container}>
         <div className={styles.containerAvatar}>
            <Avatar label={globalState.user?.name} />
         </div>
         <div className={styles.containerInput}>
            <Input
               id="input"
               name="input"
               key="input"
               placeholder="Escreva um comentário..."
               onChange={handleChangeInput}
               value={input}
            />
         </div>
         <div className={styles.containerButton}>
            <Button
               key="button"
               label="Enviar"
               onClick={createComment}
               disabled={input == ''}
            />
         </div>
      </div>
   );
};

export default CommentForm;
