import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "./colors";

export const detailsStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.background,
    },

    container: {
        flex: 1,
    },

    backButton: {
        padding: spacing.md,
        marginTop: spacing.md,
    },

    backButtonText: {
        ...typography.body,
        color: colors.primary,
    },

    header: {
        paddingHorizontal: spacing.md,
        paddingBottom: spacing.md,
    },

    title: {
        ...typography.title,
        color: colors.text,
        textAlign: 'center',
    },

    subTitle: {
        ...typography.subtitle,
        textAlign: 'center',
        marginTop: spacing.xs,
        color: colors.textSecondary
    },

    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: spacing.xl * 2
    },

    errorContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        flexDirection: 'column'
    },

    error: {
        fontSize: spacing.lg,
        color: colors.error,
    },

    loadingText: {
        ...typography.body,
        color: colors.textSecondary,
        marginTop: spacing.md,
    }
});