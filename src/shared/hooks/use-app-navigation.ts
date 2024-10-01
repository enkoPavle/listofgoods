import {NavigationProp, useNavigation} from "@react-navigation/native"

import {RootStackParamList} from "@/types/navigation"

export const useAppNavigation = useNavigation<NavigationProp<RootStackParamList>>
