import TodosCard from '../../components/TodosCard/TodosCard';
import { StyledLink } from './style';


function Home() {
  return (
    <>
        <TodosCard />
        <StyledLink href="https://github.com/AndyCuba/ntiapp">© 2022. Andy</StyledLink>
    </>
  );
}

export default Home;
