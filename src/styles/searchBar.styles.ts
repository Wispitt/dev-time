import { StyleSheet } from "react-native";
import { colors, spacing } from "./colors";

export const searchBarStyles = StyleSheet.create({
    container: {
        padding: spacing.md,
    },

    containerButtonAndInput: {
        flexDirection: 'row',
        gap: spacing.md,
        justifyContent: 'space-between'
    },

    inputContainer: {
        flex: 1,
        position: 'relative',
    },

    ContainerParagraphError: {
        marginLeft: 8,
        color: colors.error,
        height: 15,
        position: 'absolute',
        bottom: -16
    },

    paragraphError: {
        color: colors.error
    },

    input: {
        flex: 1,
        backgroundColor: colors.cardBackground,
        borderWidth: 1,
        borderColor: '#7655ED',
        borderRadius: 30,
        padding: spacing.md,
        fontSize: 16,
        color: colors.text,
        height: 50,
    },

    inputError: {
        borderColor: colors.error,
        flex: 1,
        backgroundColor: colors.cardBackground,
        borderWidth: 1,
        borderRadius: 30,
        padding: spacing.md,
        fontSize: 16,
        color: colors.text,
        height: 50,
    },

    linearGradient: {
        backgroundColor: colors.primary,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 110
    },

    buttonLinearGradient: {
        flexDirection: 'row',
        height: '100%',
    },

    buttonText: {
        color: colors.shadow,
        fontSize: 19,
        fontWeight: '600',
        marginVertical: 'auto'
    },

    searchButton: {
       marginVertical: 'auto'
    }
});