import { Text, View } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';

export const ListEmpty = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="file-tray" size={56} color="#3d3d3d" />
      <View>
        <Text style={styles.emptyText}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.text}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
};

export default ListEmpty;
