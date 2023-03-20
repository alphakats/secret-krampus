export interface Draw {
    giver: string;
    receiver: string;
}

export const shuffle = (list: string[]): Draw[] => {
    // 0. Clean list
    list = list.filter(n => n);

    const shuffledList: Draw[] = [];
    if (list.length < 2) {
        return shuffledList;
    }

    // 1. Pop List
    let popped: string = list.pop()!;
    const firstPopped = popped;

    do {
        // 2. Shuffle list and assign top
        list.sort((_a, _b) => 0.5 - Math.random());
        const receiver: string = list.pop()!;

        // 3. Store paring
        shuffledList.push({ giver: popped, receiver: receiver });
        popped = receiver;
    } while (list.length > 0);

    // 5. Special handling for last giver
    shuffledList.push({ giver: popped, receiver: firstPopped });

    return shuffledList;
};

export default shuffle;
