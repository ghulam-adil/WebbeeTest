import React from 'react';
import { View } from 'react-native';
import { Card, Text, IconButton, Button } from 'react-native-paper';

import styles from './styles';
import DropdownButton from '../../Buttons/DropdownButton';
import CustomTextInput from '../../Inputs/CustomTextInput';
import { colors } from '../../../utils/appTheme';

interface Field {
    id: string;
    name: string;
    type: string;
}

interface Category {
    id: string;
    name: string;
    fields: Field[];
}

interface CategoryItemProps {
    item: Category;
    categoryNameHandler: (id: string, name: string) => void;
    fieldNameHandler: (categoryId: string, fieldId: string, value: string) => void
}

const dropdownOptions = [
    { label: 'Text', value: 'text' },
    { label: 'Checkbox', value: 'checkbox' },
    { label: 'Number', value: 'number' },
    { label: 'Date', value: 'date' },
];

const CategoryItem: React.FC<CategoryItemProps> = ({ item, categoryNameHandler, fieldNameHandler }) => {
    return (
        <Card style={[styles.container]}>
            <Card.Content style={styles.contentContainer}>
                <Text style={styles.titleText}>{item.name}</Text>
                <CustomTextInput
                    mode="outlined"
                    label="Category Name"
                    placeholder="Category Name"
                    value={item.name}
                    onChangeText={(name) => categoryNameHandler(item.id, name)}
                    style={[styles.categoryNameInput]}
                />
                {
                    item.fields.map((field, index) => {
                        return (
                            <View style={styles.rowContainer} key={index}>
                                <CustomTextInput
                                    mode="outlined"
                                    label="Field"
                                    placeholder={field.name}
                                    value={field.name}
                                    style={[styles.categoryNameInput]}
                                    onChangeText={(text) => fieldNameHandler(item.id, field.id, text)}
                                />
                                <Text variant="bodyLarge" style={styles.fieldTypeText}>{field.type}</Text>
                                <IconButton
                                    size={30}
                                    icon="trash-can-outline"
                                    iconColor={colors.black}
                                />
                            </View>
                        )
                    })
                }
                <View style={styles.footerRowContainer}>
                    <DropdownButton title="Add Field" options={dropdownOptions} />
                    <Button mode="contained">
                        Remove
                    </Button>
                </View>
            </Card.Content>
        </Card>
    )
}

export default CategoryItem;