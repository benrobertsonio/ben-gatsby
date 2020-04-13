import React from 'react';
import Layout from '../../components/layout';
import Notes from 'gatsby-theme-notes';

export default ({
  pageContext: { groupedNotes, urls, breadcrumbs, siteTitle },
  ...props
}) => (
    <Notes
      directories={groupedNotes}
      files={urls}
      breadcrumbs={breadcrumbs}
      siteTitle={siteTitle}
      {...props}
    />
  );
