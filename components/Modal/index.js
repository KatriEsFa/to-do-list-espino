import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import cruz from '../../assets/cruz.svg';

const CustomModal = (props) => {

    const { modalVisible, itemSelected, handleDeleteItem, closeModal } = props;

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.container}>
                <View style={styles.modalView}>
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
                    <View style={styles.modalBtnContainer}>
                        <TouchableOpacity style={styles.modalDeleteOptions} onPress={() => handleDeleteItem(itemSelected.id)} title='Confirmar'>
                            <Text style={styles.modalBtnTextTag}>Confirmar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalDeleteOptions} onPress={() => closeModal()}>
                            <Text style={styles.modalBtnTextTag}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(1,1,1,0.5)',
    },

    closeIcon: {
        width: 30,
        height: 30,
    },
    modalView: {
        backgroundColor: '#e6e8e5',
        width: '80%',
        heigt: '60%',
        borderRadius: 20,
        padding: '10%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column'
    },
    modalMessage: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalBtnContainer: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    modalItem: {
        fontSize: 30,
    },
    modalBtn: {
        flexDirection: 'row'
    },
    modalDeleteOptions: {
        backgroundColor: '#42423e',
        margin: 15,
        padding: 10,
        borderRadius: 5,
    },
    modalBtnTextTag: {

    }



})

export default CustomModal