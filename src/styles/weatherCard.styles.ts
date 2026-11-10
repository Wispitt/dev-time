import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "./colors";

export const weatherCardStyles = StyleSheet.create({
    card: {
        backgroundColor: colors.cardBackground,
        shadowColor: '#000',
        shadowOffset: {
            width: -2,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        borderRadius: 30,
        padding: spacing.lg,
        marginHorizontal: spacing.md,
        marginVertical: spacing.sm,
        alignItems: 'center',
    },

    cityName: {
        ...typography.title,
        color: colors.text,
        marginBottom: spacing.xs,
        width: '100%',
        textAlign: 'center'
    },

    weaherIcon: {
        width: 100,
        height: 100,
        marginBottom: spacing.sm
    },

    temperatureCold: {
        fontSize: 64,
        fontWeight: 'bold',
        color: colors.primary,
        marginVertical: spacing.md
    },

    temperatureMedium: {
        fontSize: 64,
        fontWeight: 'bold',
        color: '#FF8A30',
        marginVertical: spacing.md
    },

    temperatureHot: {
        fontSize: 64,
        fontWeight: 'bold',
        color: '#FF3B30',
        marginVertical: spacing.md
    },

    description: {
        ...typography.subtitle,
        color: colors.textSecondary,
        textTransform: 'capitalize',
        marginBottom: spacing.md
    },

    detailContainer: {
        flexDirection: 'row',
        marginTop: spacing.md,
        gap: spacing.lg
    },

    detailItems: {
        alignItems: 'center'
    },

    detailLabel: {
        ...typography.caption,
        color: colors.textLight,
        marginBottom: spacing.xs
    },

    detailValue: {
        ...typography.body,
        color: colors.text
    },

    viewMinMax: {
        flexDirection: 'row',
        gap: 30,
    },

    tempMinMax: {
        marginBottom: 13,
        ...typography.caption,
    }
});