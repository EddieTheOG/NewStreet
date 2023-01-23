import { useState, useEffect } from "react";
import { Button, Container, Form, Input, List } from "semantic-ui-react";
import { searchItemsApi } from "../../../api/ItemApi/ItemApi";

const ItemsContainer = () => {

    const [items, setItems] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const searchItems = () => {
        searchItemsApi(searchInput).then(items => {
            setItems(items);
        });
    }
    return (
        <>
            <h1>Items</h1>
            <Form className="search center" onSubmit={() => searchItems()}>
                <Form.Input label='Item Search' className="search-bar" type='text' onChange={(e) => setSearchInput(e.target.value)} />
                <Button type='submit'>Search</Button>
            </Form>
            <List>
               {
                    items.map(({ 
                        id,
                        requiredJobs, 
                        requiredLevel, 
                        requiredGender: gender,
                        name,
                        desc: description,
                        typeInfo: {
                            overallCategory: itemCategory,
                            category,
                            subCategory
                        }  })=> {
                        return (
                            <List.Item key={id}>
                                {name}
                            </List.Item>
                        );
                    })
               }
            </List>
        </>
    );
}

export default ItemsContainer;