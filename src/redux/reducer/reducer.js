const initialState = {
  contactList: [], // 전체 연락처 목록
  filteredContactList: [], // 검색 결과에 따른 연락처 목록
  searchText: "", // 사용자 검색 텍스트
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          { name: payload.name, phoneNumber: payload.phoneNumber },
        ],
      };
    case "SEARCH_TEXT":
      const searchText = action.payload.searchText;
      const filteredContactList = state.contactList.filter(
        (item) =>
          item.name.includes(searchText) ||
          String(item.phoneNumber).includes(searchText)
      );
      return {
        ...state,
        searchText,
        filteredContactList,
      };
    default:
      return { ...state };
  }
}

export default reducer;
