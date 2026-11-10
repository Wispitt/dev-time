import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "./colors";

export const homeStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.background
    },

    container: {
        flex: 1,
        paddingTop: 40
    },

    header: {
        paddingTop: spacing.xl,
        paddingBottom: spacing.md,
        paddingHorizontal: spacing.md,
        flexDirection: 'column',
        alignItems: 'center'
    },

    title: {
        ...typography.title,
        color: colors.text,
        textAlign: 'center',
        marginLeft: 10
    },

    subTitle: {
        ...typography.subtitle,
        color: colors.textSecondary,
        textAlign: 'center',
        marginTop: spacing.xs,
    },

    containerCloud: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        marginVertical: 18,
    },

    line: {
        flex: 0.40,
        height: 1,
        backgroundColor: '#94A3B8',
    },

    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: spacing.sm,
    },

    emptyText: {
        ...typography.body,
        color: colors.textLight,
        textAlign: 'center',
    },

    linearGradient: {
        backgroundColor: colors.primary,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        flex: 1,
        marginHorizontal: 20,
    },

    gpsButton: {
        width: '100%',
        height: '100%'
    },

    buttonText: {
        color: colors.shadow,
        fontSize: 18,
        fontWeight: '700',
        textAlign: "center",
        marginVertical: 'auto'
    },

    ContainerParagraphError: {
        color: colors.error,
        width: '100%',
    },

    paragraphError: {
        color: colors.error,
        textAlign: 'center',
        flex: 1,
        marginTop: 3,
        fontSize: spacing.md
    },
});