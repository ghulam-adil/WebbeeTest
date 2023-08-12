import React, { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import uuid from 'react-native-uuid';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles'
import CategoryItem from '../../components/Items/CategoryItem'
import { addCategory, updateCategoryName, updateFieldName } from '../../redux/general';
import { vh, vw } from '../../utils/dimensions';

const CategoryScreen: FC = () => {
    const categories = useSelector(state => state.general.categories)
    const dispatch = useDispatch();

    const renderCategories = () => {
        if (categories.length == 0) {
            return <Text>No categories to display</Text>
        }
        return categories.map((val, i) => {
            return <CategoryItem key={i} item={val} categoryNameHandler={categoryNameHandler} fieldNameHandler={fieldNameHandler} />
        })
    }

    const addCategoryHandler = () => {
        const data = {
            id: uuid.v4(),
            name: "New Category",
            fields: [{
                name: "Field",
                type: "text",
                id: uuid.v4(),
            }],
        };
        dispatch(addCategory(data));
    }

    const categoryNameHandler = (id, name) => {
        const data = {
            id,
            name,
        };
        dispatch(updateCategoryName(data))
    }

    const fieldNameHandler = (categoryId, fieldId, value) => {
        const data = {
            categoryId,
            fieldId,
            value,
        };

        dispatch(updateFieldName(data))
    }

    return (
        <ScrollView contentContainerStyle={styles.contentContainer} style={styles.container} showsVerticalScrollIndicator={false}>

            <View style={{ height: vh * 80, alignItems: 'center' }}>
                {renderCategories()}
            </View>

            <View style={{ height: vh * 20, width: vw * 100, justifyContent: 'center', position: 'absolute', bottom: 0, right: 0, left: 0 }}>
                <Button mode="contained" onPress={addCategoryHandler} style={styles.button}>
                    ADD NEW CATEGORY
                </Button>
            </View>

        </ScrollView>
    )
}

export default CategoryScreen