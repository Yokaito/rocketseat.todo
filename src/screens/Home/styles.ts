import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    backgroundColor: '#0d0d0d',
  },
  logo: {
    height: 173,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 24,
  },
  inputWrapper: {
    marginTop: -27,
    marginBottom: 32,
    flexDirection: 'row',
    gap: 4,
  },
  input: {
    height: 54,
    backgroundColor: '#262626',
    borderRadius: 6,
    padding: 16,
    color: '#f2f2f2',
    fontSize: 16,
    flex: 1,
  },
  button: {
    height: 52,
    width: 52,
    backgroundColor: '#1E6F9F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  listContainer: {},
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  listHeaderTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  textCreated: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#4EA8DE',
  },
  textConcluded: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#8284FA',
  },
  textWrapperNumber: {
    width: 25,
    height: 19,
    borderRadius: 9999,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNumber: {
    color: '#D9D9D9',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
