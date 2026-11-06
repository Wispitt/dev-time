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
        borderRadius: 12,
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
        borderRadius: 12,
        padding: spacing.md,
        fontSize: 16,
        color: colors.text,
        height: 50,
    },

    button: {
        backgroundColor: colors.primary,
        borderRadius: 12,
        padding: spacing.md,
        paddingHorizontal: spacing.lg,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },

    buttonText: {
        color: colors.background,
        fontSize: 16,
        fontWeight: '600',
    }
});