import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

const CustomModal = (props) => {

    const { modalVisible, itemSelected, handleDeleteItem, handleCompleteItem } = props;

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <View style={styles.modalTitle}>
                        <Text>
                            Modal
                        </Text>
                    </View>
                    <View stlye={styles.modalMessage}>
                        <Text>
                            ¿Desea Borrar?
                        </Text>
                    </View>
                    <View style={styles.modalMessage}>
                        <Text style={styles.modalItem}>
                            {itemSelected.value}
                        </Text>
                    </View>
                    <View style={styles.modalBtn}>
                        <Pressable onPress={() => handleDeleteItem(itemSelected.id)} title='Confirmar' />
                        <Pressable onPress={() => handleCompleteItem(itemSelected.id)} title='Completar' />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)'
        },
        modalView: {
            backgroundColor: '#414240',
            width: '80%',
            heigt: '60%',
            borderRadius: 20,
            padding: '10%',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column'
        },
        modalTitle: {
            color: 'white',
            fontSize: 20,
        },
        modalMessage: {
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center'
        },
        modalButton: {
            margin: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
        },
        modalItem: {
            fontSize: 30,
        }

    }

})

export default CustomModal