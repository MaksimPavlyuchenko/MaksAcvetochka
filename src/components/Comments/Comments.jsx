import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { Grid } from '../Grid/Grid';
// import { comments } from "../../helpers/comments";
import { useGetCommentsQuery } from '../../redux/commentApi';
import { Loader } from '../Loader/Loader';
import { getFilter } from '../../redux/filterSlice';
import { useSelector } from 'react-redux';

export const Comments = () => {
  const { data: comments, isLoading, isSuccess } = useGetCommentsQuery();
  const filter = useSelector(getFilter);

  const visibleComments = comments
    ? comments.filter(comment =>
        comment.content.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  return (
    <>
      {isLoading && <Loader />}
      {isSuccess && (
        <Grid>
          {visibleComments &&
            visibleComments.map(comment => (
              <Comment key={comment.id} {...comment} />
            ))}
        </Grid>
      )}
    </>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
