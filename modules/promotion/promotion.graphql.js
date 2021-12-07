const promotionType = `
    type Promotion {
        id: ID
        ring: Ring
        promImage: String!
    }`;

const promotionInput = `
    input PromotionInput{
        id: ID
        ring: ID!
        promImage: String!
    }
`;

module.exports = {
  promotionType,
  promotionInput,
};
