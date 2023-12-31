"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrder = exports.deleteOrder = exports.addOrder = void 0;
const orderRepository = __importStar(require("../data-access/order-repository"));
const payment_terms_service_1 = __importDefault(require("./payment-terms-service"));
// ️️️✅ Best Practice: Start a flow with a 'use case' function that summarizes the flow in high-level
// It should merely tell the feature story without too much information. Kind of a 'yellow pages' of the module
async function addOrder(newOrder) {
    // assertNewOrderIsValid(newOrder);
    // const userWhoOrdered = await assertUserExists(newOrder.userId);
    const finalOrderToSave = { ...newOrder };
    const approvedPaymentTerms = payment_terms_service_1.default.determinePaymentTerms(finalOrderToSave.paymentTermsInDays, newOrder.userId);
    finalOrderToSave.paymentTermsInDays = approvedPaymentTerms;
    const response = await orderRepository.addOrder(finalOrderToSave);
    return response;
}
exports.addOrder = addOrder;
async function deleteOrder(userId) {
    return await orderRepository.deleteOrder(userId);
}
exports.deleteOrder = deleteOrder;
async function getOrder(userId) {
    return await orderRepository.getOrderById(userId);
}
exports.getOrder = getOrder;
