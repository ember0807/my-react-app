import React, { useState } from 'react';
import './CategoryTree.css';
const CategoryTree = ({ categories }) => {
    const [expanded, setExpanded] = useState({});

    const toggleExpand = (id) => {
        setExpanded(prevState => ({ ...prevState, [id]: !prevState[id] }));
    };


    const renderCategories = (categories) => {
        return (
            <ul>
                {categories.map(category => (
                    <li key={category.id}>
                        <span onClick={() => toggleExpand(category.id)} style={{ cursor: 'pointer' }}>
                            {category.name} {category.children && category.children.length > 0 && (expanded[category.id] ? '(-)' : '(+)')}
                        </span>
                        {category.children && category.children.length > 0 && expanded[category.id] && (
                            renderCategories(category.children)
                        )}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div>
            {renderCategories(categories)}
        </div>
    );
};

export default CategoryTree;