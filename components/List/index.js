import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native"

const List = (props) => {
    const { itemList, handleModal } = props;

    return (
        <FlatList
            data={itemList}
            renderItem={data => (
                <TouchableOpacity onPress={() => handleModal(data.item.id)} style={styles.item}>
                    <Text style={[...styles.item, {
                        textDecorationStyle: data.item.completed ? 'dashed' : null,
                        color: data.item.completed ? 'green' : 'red'
                    }]}>{data.item.value}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
        />
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#e6e8e5',
        borderColor: '#b4b6b3',
        borderRadius: 15,
        marginTop: '15%',
        height: 65,


    },

})

export default List;