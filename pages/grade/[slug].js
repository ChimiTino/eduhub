export const getStaticPaths = async () => {
  const res = await fetch('https://ngnfffasfd.herokuapp.com/edu_cntr');
  const data = await res.json();

  const paths = data.map(item => {
    return {
      params: { id: item.id.charToArray }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://ngnfffasfd.herokuapp.com/edu_cntr/' + id);
  const data = await res.json();

  return {
    props: { school: data }
  }
}

const Details = ({ item }) => {
  return (
    <div>
      <h1>{ item.subject}</h1>
     
      
    </div>
  );
}

export default Details;