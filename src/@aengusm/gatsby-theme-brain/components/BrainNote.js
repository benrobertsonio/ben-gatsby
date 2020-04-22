import React from "react";
/** @jsx jsx */
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import Layout from "../../../components/layout";
import { Container, Heading, Text, jsx, Box } from "theme-ui";
import SEO from "../../../components/seo";
import Portal from '@reach/portal';
import Anchor from "../../../components/anchor";

const BrainNote = ({ note, linkedNotes }) => {
  let references = [];
  let referenceBlock;
  if (note.inboundReferences != null) {
    references = note.inboundReferences.map((ref, i) => {
      const reference = linkedNotes.find((note) => note.slug === ref);
      return (
        <Box mb="3">
          <Heading as="h3">
            <Anchor
              to={`/notes/${reference.slug}`}
              key={`${ref}-${reference.slug}`}
            >
              {reference.title}
            </Anchor>
          </Heading>
          <Text>{reference.childMdx.excerpt}</Text>
        </Box>
      );
    });

    if (references.length > 0) {
      referenceBlock = (
        <>
          <Heading sx={{ textTransform: 'capitalize' }}>{note.title}: References</Heading>
          <ul>{references}</ul>
        </>
      );
    }
  }

  return (
    <Layout>
      <SEO title={`${note.title} Notes`} />
      <Container variant="narrow">
        <Text sx={{ fontSize: 1, fontStyle: 'italic', my: 4 }}>
          These <Anchor to="/notes">notes</Anchor> are unpolished collections of thoughts, unfinished ideas, and things I want to remember later. In the spirit of learning in public, I'm sharing them here. Have fun exploring, if you want!
        </Text>

        <div id="brainNote">
          <Heading as="h1">{note.title}</Heading>
          <MDXRenderer>{note.childMdx.body}</MDXRenderer>
          {referenceBlock}
        </div>
        {linkedNotes &&
          linkedNotes
            .filter(
              (ln) => !(note.inboundReferences || []).includes(ln.slug) && !!ln.childMdx.excerpt
            )
            .map((ln) => (
              <Portal>
                <div
                  sx={{
                    // position: 'fixed',
                    width: 250,
                    p: 3
                  }}
                  id={ln.slug}
                >
                  <Heading as="h4">{ln.title}</Heading>
                  <Text sx={{ fontSize: '0' }}>{ln.childMdx.excerpt}</Text>
                </div>
              </Portal>
            ))}
      </Container>
    </Layout>
  );
};

export default BrainNote;