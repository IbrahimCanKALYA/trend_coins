import React, {useState, useEffect, useRef} from 'react';
import {View, FlatList, RefreshControl, SafeAreaView, ViewToken} from 'react-native';
import {TCText} from '@/components/TCText';
import {getTrendingCoins} from "@/services/getTrendingCoins";
import { StyleSheet } from "react-native";
import {Colors} from "@/constants/Colors"
import { useToast } from "react-native-toast-notifications";


import {ListItem} from "@/components/ListItem"

type Coins = {
	data: CoinData[];
	page: number;
	isEnd: boolean;
}

export default function Screen() {

	const [coins, setCoins] = useState<Coins>({
		data:[],
		page: 1,
		isEnd: false
	});

	const [loading, setLoading] = useState<boolean>(true);
	const [visibleItemKeys, setVisibleItemKeys] = useState<string[]>([]);
	const toast = useToast();

	const onViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
		const keys = viewableItems.map(item => item.key as string);
		setVisibleItemKeys(keys)
	};
	  
	const fetchCoins = async (page: number) => {
		try {
			if (page === 1) setLoading(true);
			const response = await getTrendingCoins(page)
			
			setCoins(prevState => ({
				page: page,
				data: page > 1 ? [...prevState.data, ...response.data] : response.data,
				isEnd: response.data.length < 100 ? true : false 
			}));
			
		} catch (error) {
			toast.show("API Rate Limit Error!");

		} finally {
			setLoading(false);
		}
	};

	const fetchMore = () => {
		if (!coins.isEnd) {
			fetchCoins(coins.page + 1)
		}
	}

	useEffect(() => {
		fetchCoins(1);
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.contentContainer}>
				<TCText style={styles.title} color="black100" type="largeTitle">Trending Coins</TCText>
				<FlatList
					refreshControl={<RefreshControl refreshing={loading} onRefresh={() => fetchCoins(1)} />}
					data={coins.data}
					initialNumToRender={5}
					maxToRenderPerBatch={25}
					renderItem={({item, index}) => <ListItem coin={item} isVisible={visibleItemKeys.includes(item.id)} index={index} />}
					keyExtractor={item => item.id}
					viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
					onViewableItemsChanged={onViewableItemsChanged}
					onEndReached={fetchMore}
					onEndReachedThreshold={0.4}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
		paddingTop: 24
    },
    contentContainer: {
        flex: 1,
    },
    title: {
        margin:16,
        marginTop: 12
    }
})