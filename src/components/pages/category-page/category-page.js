import React from "react";
import {connect} from "react-redux";
import {fetchCategoryList} from "../../../actions/products";
import withService from "../../hoc/with-service";
import Section from "../../wrappers-components/section/section";
import CategoryList from "../../category-list/category-list";
import BestSales from "../../best-sales/best-sales";

class CategoryPage extends React.Component {
  
  componentDidMount() {
    this.getCategoryList();
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.getCategoryList();
    }
  }
  
  getCategoryList = () => {
    const {fetchCategoryList, id, categoriesLists} = this.props;
    if (categoriesLists.lists[id]) return;
    fetchCategoryList(id);
  } 
  
  render() {
    const { categoriesLists, id } = this.props;
    
    return(
      <main>
        <Section>
          <CategoryList
            list={categoriesLists.lists[id]}
            isLoading={categoriesLists.loading} />         
        </Section>
        <Section heading={"Best Sales"}>
          <BestSales />
        </Section>
      </main>
    )
  }
}

const mapStateToProps = ({categoriesLists}) => {
  return {categoriesLists}
}

const mapStateToDispatch = (dispatch, ownProps) => {
  const {service} = ownProps;
  return {
    fetchCategoryList: (id) => fetchCategoryList(service.getDevices, id, dispatch)
  }
}

export default 
  withService(
  connect(mapStateToProps, mapStateToDispatch)(CategoryPage)
);

