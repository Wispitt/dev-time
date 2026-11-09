import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "./colors";

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
        height:15,
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
        borderColor: colors.border,
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

    buttoninearGradient: {
        width: '100%',
        height: '100%'
    },

    buttonText: {
        color: colors.background,
        fontSize: 17,
        fontWeight: '600',
        textAlign: "center",
        marginVertical: 'auto'
    }
});