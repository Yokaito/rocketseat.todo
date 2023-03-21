import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Entypo, AntDesign, Feather } from '@expo/vector-icons';

type TaskProps = {
  id: string;
  message: string;
  concluded: boolean;
  onConclude: (id: string) => void;
  onRemove: (id: string) => void;
};

export const Task = ({
  message,
  concluded,
  onConclude,
  id,
  onRemove,
}: TaskProps) => {
  return (
    <View style={[styles.container, { borderWidth: concluded ? 0 : 1 }]}>
      <TouchableOpacity onPress={() => onConclude(id)}>
        <View>
          {concluded ? (
            <AntDesign name="checkcircle" size={18} color="#5E60CE" />
          ) : (
            <Entypo name="circle" size={18} color="#4EA8DE" />
          )}
        </View>
      </TouchableOpacity>
      <Text
        style={[
          styles.message,
          {
            textDecorationLine: concluded ? 'line-through' : 'none',
            color: concluded ? '#808080' : '#f2f2f2',
          },
        ]}
      >
        {message}
      </Text>
      <TouchableOpacity onPress={() => onRemove(id)}>
        <View>
          <Feather name="trash-2" size={24} color="#808080" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Task;
